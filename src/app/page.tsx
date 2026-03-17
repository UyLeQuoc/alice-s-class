"use client";

import React, { useEffect, useState } from 'react';

export default function Page() {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        // 1. Fetch the HTML content inside the client component to bypass layout
        fetch('/landing.html')
            .then((res) => res.text())
            .then((text) => {
                // We strip the script tags out of the HTML to prevent React from complaining,
                // and because they wouldn't execute anyway.
                const bodyContentMatch = text.match(/<body[^>]*>([\s\S]*)<\/body>/i);
                if (bodyContentMatch) {
                    // Remove the raw script block completely from the HTML string
                    const htmlWithoutScripts = bodyContentMatch[1].replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
                    setHtmlContent(htmlWithoutScripts);
                }
            });
    }, []);

    // 2. We use a secondary useEffect to run the scripts *after* the HTML is fully rendered in the DOM
    useEffect(() => {
        if (!htmlContent) return;

        // Intersection Observer for fade-up elements
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((el) => {
                    if (el.isIntersecting) {
                        el.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.12 }
        );

        document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

        // Roadmap steps staggered reveal
        const roadmapObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((el, i) => {
                    if (el.isIntersecting) {
                        const delay = (el.target as HTMLElement).dataset.delay || '0';
                        setTimeout(() => el.target.classList.add('visible'), parseInt(delay, 10));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.roadmap-step').forEach((el, i) => {
            (el as HTMLElement).dataset.delay = (i * 120).toString();
            roadmapObserver.observe(el);
        });

        // Floating CTA
        const floatingCta = document.getElementById('floatingCta');
        const scrollHandler = () => {
            if (window.scrollY > 500) {
                floatingCta?.classList.add('show');
            } else {
                floatingCta?.classList.remove('show');
            }
        };
        window.addEventListener('scroll', scrollHandler);

        // Tab filtering function Needs to be attached globally for inline onclick handlers, but
        // since we can't easily eval it securely with strict CSP, it's safer to attach listeners.
        const attachTabListeners = () => {
            const tabBtns = document.querySelectorAll('.tab-btn');
            tabBtns.forEach(btn => {
                // Remove old listeners to prevent stacking on re-renders
                const newBtn = btn.cloneNode(true);
                btn.parentNode?.replaceChild(newBtn, btn);

                newBtn.addEventListener('click', (event) => {
                    const year = (newBtn as HTMLElement).getAttribute('onclick')?.match(/'([^']+)'/)?.[1] || 'all';

                    const pills = document.querySelectorAll('.score-pill[data-year]');
                    pills.forEach((p: Element) => {
                        const pillEl = p as HTMLElement;
                        if (year === 'all' || pillEl.dataset.year === year) {
                            pillEl.style.display = 'flex';
                        } else {
                            pillEl.style.display = 'none';
                        }
                    });

                    document.querySelectorAll('.tab-btn').forEach((b: Element) => {
                        const bEl = b as HTMLElement;
                        bEl.style.background = 'transparent';
                        bEl.style.color = '#4a4a4a';
                        bEl.style.borderColor = '#e8e0d8';
                    });

                    const targetEl = event.target as HTMLElement;
                    targetEl.style.background = '#C8102E';
                    targetEl.style.color = '#fff';
                    targetEl.style.borderColor = '#C8102E';
                });
            });
        };
        attachTabListeners();

        // Form submit logic
        const formSubmitBtn = document.querySelector('.form-submit');
        if (formSubmitBtn) {
            // Clone and replace to prevent duplicate listeners across strict mode re-renders
            const newFormSubmitBtn = formSubmitBtn.cloneNode(true);
            formSubmitBtn.parentNode?.replaceChild(newFormSubmitBtn, formSubmitBtn);

            newFormSubmitBtn.addEventListener('click', async (e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                const name = (document.getElementById('form-name') as HTMLInputElement)?.value;
                const phone = (document.getElementById('form-phone') as HTMLInputElement)?.value;
                const stage = (document.getElementById('form-stage') as HTMLSelectElement)?.value;
                const band = (document.getElementById('form-band') as HTMLSelectElement)?.value;
                const goal = (document.getElementById('form-goal') as HTMLInputElement)?.value;

                if (!name || !phone) {
                    alert('Vui lòng điền họ tên và số điện thoại để chúng tôi có thể liên hệ bạn nhé!');
                    return;
                }

                const originalText = btn.innerHTML;
                btn.disabled = true;
                btn.innerHTML = 'Đang gửi...';

                const scriptURL = "https://script.google.com/macros/s/AKfycbxf5jvvLiAdLep_aEAemXv6W04lU_4olMW-GwOeuKAl4--iAvkVNBp2k1Hec_fs2jntSA/exec";
                const messageDetails = `Giai đoạn: ${stage} | Band: ${band} | Mục tiêu: ${goal}`;

                try {
                    await fetch(scriptURL, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                        body: JSON.stringify({ name, phone, stage, band, goal })
                    });

                    const formCard = document.querySelector('.form-card');
                    if (formCard) {
                        formCard.innerHTML = `
                    <div style="text-align:center; padding: 40px 20px;">
                        <div style="font-size:3rem; margin-bottom:16px;">🎉</div>
                        <h3 style="font-family:'Cormorant Garamond',serif; font-size:1.8rem; color:var(--charcoal); margin-bottom:12px;">Đã nhận thông tin của bạn!</h3>
                        <p style="color:var(--mid); line-height:1.8; font-size:0.95rem;">
                        Cảm ơn <strong>${name}</strong> đã đăng ký.<br>
                        Chúng tôi sẽ liên hệ qua số <strong>${phone}</strong> trong vòng 24 giờ để sắp xếp buổi tư vấn miễn phí cho bạn.
                        </p>
                    </div>
                `;
                    }
                } catch (error) {
                    console.error('Error!', (error as Error).message);
                    alert('Có lỗi xảy ra, vui lòng thử lại sau hoặc liên hệ trực tiếp qua số điện thoại.');
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                }
            });
        }

        // Cleanup listeners on unmount
        return () => {
            window.removeEventListener('scroll', scrollHandler);
            observer.disconnect();
            roadmapObserver.disconnect();
        };
    }, [htmlContent]);

    if (!htmlContent) {
        return null; // Or a subtle loading spinner
    }

    return (
        <div
            className="fixed inset-0 z-[9999] bg-[#FEFCFA] overflow-auto landing-page-container"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
}
