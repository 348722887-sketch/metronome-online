/**
 * ============================================================
 *  在线节拍器 — 广告管理系统
 *  Online Metronome — Ad Management System
 *  Domain: beat.sevenmeow.com
 * ============================================================
 *
 *  使用方法（在每个 HTML 页面中）：
 *  1. <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>
 *  2. <script src="./js/ads.js"></script>
 *  3. 在页面中放置带 data-ad-slot-name 属性的容器：
 *     <div data-ad-slot-name="top-banner" class="ad-container"></div>
 *     <div data-ad-slot-name="after-content" class="ad-container"></div>
 *
 *  ⚠️ 当前状态：AdSense 审核中，展示占位广告。
 *     审核通过后，只需修改 AdConfig.publisherId 即可启用真实广告。
 */

(function () {
    'use strict';

    // ============================================================
    //  配置 — 审核通过后只需修改这里
    // ============================================================
    const AdConfig = {
        // Google AdSense 发布商 ID（形如 ca-pub-1234567890123456）
        // 审核通过后替换为真实 ID；留空则显示占位广告
        publisherId: '',

        // 各广告位的 AdSense 广告单元 ID（形如 1234567890）
        // 在 AdSense 后台 → 广告 → 广告单元 中创建获取
        slots: {
            'top-banner': {
                id: '',
                format: 'horizontal',
                responsive: true,
                sizes: [[728, 90], [970, 90], [320, 50]],
                fallback: '🎵 广告位 — 顶部横幅 728×90'
            },
            'after-content': {
                id: '',
                format: 'auto',
                responsive: true,
                sizes: [[728, 90], [336, 280], [300, 250]],
                fallback: '🎵 广告位 — 自适应'
            },
            'bottom-banner': {
                id: '',
                format: 'horizontal',
                responsive: true,
                sizes: [[728, 90], [320, 50]],
                fallback: '🎵 广告位 — 底部横幅'
            },
            'side-rect': {
                id: '',
                format: 'rectangle',
                responsive: false,
                sizes: [[300, 250]],
                fallback: '🎵 广告位 — 300×250'
            }
        },

        // 是否启用广告（审核通过后设为 true，本地开发时 false）
        enabled: false,

        // 是否显示广告标签（AdSense 政策要求）
        showAdLabel: true,

        // GDPR Cookie 同意（必须 — Google 要求欧洲用户同意后展示个性化广告）
        gdprEnabled: true,
    };

    // ============================================================
    //  GDPR Cookie 同意弹窗
    // ============================================================
    function initGDPRConsent() {
        if (!AdConfig.gdprEnabled) return;
        if (localStorage.getItem('ad-consent') !== null) return;

        const banner = document.createElement('div');
        banner.id = 'gdpr-banner';
        banner.innerHTML = `
            <div style="
                position:fixed;bottom:0;left:0;right:0;z-index:99999;
                background:#1a1a21;color:#ccc;padding:16px 20px;
                border-top:1px solid #2a2a35;font-size:13px;
                display:flex;flex-wrap:wrap;align-items:center;justify-content:center;
                gap:12px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;
            ">
                <span>🍪 本站使用 Cookie 展示个性化广告。继续使用即表示同意。
                    <a href="./privacy.html" style="color:#4F8CFF;text-decoration:underline;">隐私政策</a>
                </span>
                <button id="gdpr-accept" style="
                    background:#4F8CFF;color:#fff;border:none;
                    padding:8px 22px;border-radius:6px;font-size:13px;
                    font-weight:600;cursor:pointer;white-space:nowrap;
                ">知道了</button>
            </div>
        `;
        document.body.appendChild(banner);

        document.getElementById('gdpr-accept').addEventListener('click', function () {
            localStorage.setItem('ad-consent', 'accepted');
            banner.remove();
        });
    }

    // ============================================================
    //  广告注入引擎
    // ============================================================
    function initAds() {
        const containers = document.querySelectorAll('[data-ad-slot-name]');
        if (containers.length === 0) return;

        containers.forEach(function (container) {
            const slotName = container.getAttribute('data-ad-slot-name');
            const slotConfig = AdConfig.slots[slotName];

            if (!slotConfig) return;

            if (AdConfig.enabled && AdConfig.publisherId && slotConfig.id) {
                // ===== 真实 AdSense 广告 =====
                renderRealAd(container, slotName, slotConfig);
            } else {
                // ===== 占位广告 =====
                renderPlaceholder(container, slotConfig);
            }
        });
    }

    function renderRealAd(container, slotName, slotConfig) {
        const ins = document.createElement('ins');
        ins.className = 'adsbygoogle';
        ins.setAttribute('data-ad-client', AdConfig.publisherId);
        ins.setAttribute('data-ad-slot', slotConfig.id);
        ins.setAttribute('data-ad-format', slotConfig.format);
        if (slotConfig.responsive) {
            ins.setAttribute('data-full-width-responsive', 'true');
        }
        ins.style.display = 'block';
        ins.style.minHeight = '90px';

        container.innerHTML = '';
        container.appendChild(ins);

        // 触发 AdSense 加载
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.warn('[Ads] AdSense push failed:', e.message);
        }

        // 广告标签
        if (AdConfig.showAdLabel) {
            const label = document.createElement('div');
            label.style.cssText = 'text-align:center;font-size:10px;color:#aaa;margin-top:2px;';
            label.textContent = '广告';
            container.appendChild(label);
        }
    }

    function renderPlaceholder(container, slotConfig) {
        const sizes = slotConfig.sizes || [[728, 90]];
        const primarySize = sizes[0];
        const w = primarySize[0];
        const h = primarySize[1];

        container.style.cssText = `
            border:1px dashed #d0ddd0;border-radius:8px;
            display:flex;flex-direction:column;align-items:center;justify-content:center;
            color:#8a9a8a;font-size:12px;width:100%;min-height:${h}px;
            background:rgba(79,140,255,.02);overflow:hidden;
        `;
        container.innerHTML = `
            <span style="opacity:0.6">${slotConfig.fallback}</span>
            <span style="font-size:10px;opacity:0.4;margin-top:2px">AdSense 审核中</span>
        `;
    }

    // ============================================================
    //  移动端自适应：页面宽度变化时刷新广告
    // ============================================================
    let resizeTimer;
    function onResize() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if (AdConfig.enabled) {
                initAds(); // 重新渲染以适配新尺寸
            }
        }, 300);
    }

    // ============================================================
    //  Public API — 方便在其他脚本中手动控制
    // ============================================================
    window.AdManager = {
        config: AdConfig,

        // 启用真实广告（审核通过后调用）
        enable: function (publisherId, slotMap) {
            AdConfig.enabled = true;
            AdConfig.publisherId = publisherId || AdConfig.publisherId;
            if (slotMap) {
                Object.keys(slotMap).forEach(function (key) {
                    if (AdConfig.slots[key]) {
                        AdConfig.slots[key].id = slotMap[key];
                    }
                });
            }
            initAds();
        },

        // 禁用广告
        disable: function () {
            AdConfig.enabled = false;
            initAds();
        },

        // 刷新所有广告
        refresh: initAds,

        // 获取当前状态
        getStatus: function () {
            return {
                enabled: AdConfig.enabled,
                publisherId: AdConfig.publisherId,
                slotsConfigured: Object.values(AdConfig.slots).filter(function (s) { return !!s.id; }).length
            };
        }
    };

    // ============================================================
    //  启动
    // ============================================================
    function boot() {
        // 检查是否已有 GDPR 同意
        if (localStorage.getItem('ad-consent') === 'accepted') {
            AdConfig.gdprEnabled = false; // 已同意，不弹窗
        }

        initGDPRConsent();
        initAds();
        window.addEventListener('resize', onResize);
    }

    // DOM 加载完成后启动
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }

})();
