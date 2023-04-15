import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookOpenStand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.92 4.054a1.306 1.306 0 0 0-.685.5c-.246.388-.238.207-.226 4.609l.011 4.017.11.209c.145.274.308.456.55.611.26.167.465.225 1.053.301 1.519.195 2.952.601 4.036 1.144.259.129.479.235.49.235.03 0 .026-6.04-.006-8.316l-.026-1.929-.284-.157c-.932-.516-2.44-.967-4.003-1.196-.636-.093-.767-.096-1.02-.028m11.12.026c-1.597.248-3.066.69-3.983 1.198l-.284.157-.026 1.929c-.032 2.276-.036 8.316-.006 8.316.011 0 .231-.106.49-.235 1.084-.543 2.517-.949 4.036-1.144.588-.076.793-.134 1.053-.301.242-.155.405-.337.55-.611l.11-.209V4.978l-.132-.267c-.212-.431-.558-.663-1.035-.692a4.35 4.35 0 0 0-.773.061'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookOpenStand);
export default ForwardRef;
