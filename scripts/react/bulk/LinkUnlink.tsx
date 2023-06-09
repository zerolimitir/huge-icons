import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLinkUnlink = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.7 2.996a.734.734 0 0 0-.398.413c-.052.124-.062.369-.062 1.487v1.339l-1.39.013c-1.562.014-1.529.008-1.786.326-.112.138-.124.181-.124.426 0 .244.013.289.122.426a1.1 1.1 0 0 0 .299.244c.175.089.189.09 1.937.09 1.162 0 1.816-.015 1.921-.045a.823.823 0 0 0 .496-.496c.03-.105.044-.756.044-1.919-.001-1.626-.006-1.772-.075-1.92-.181-.392-.607-.558-.984-.384m7.48 5.841c-.109.051-.993.91-2.767 2.689-2.359 2.365-2.611 2.631-2.653 2.79-.152.579.386 1.095.948.908.172-.057.458-.33 2.801-2.674 1.819-1.821 2.627-2.655 2.67-2.759.113-.275.038-.66-.165-.839a.792.792 0 0 0-.834-.115m2.631 7.441a.883.883 0 0 0-.481.374c-.063.116-.071.304-.081 1.968l-.011 1.84.091.178c.05.097.16.232.245.3.137.109.182.122.426.122s.289-.013.426-.122a1.1 1.1 0 0 0 .244-.299c.088-.172.09-.205.09-1.527V17.76h1.352c1.322 0 1.355-.002 1.527-.09a1.1 1.1 0 0 0 .299-.244c.109-.137.122-.182.122-.426 0-.245-.012-.288-.124-.426-.264-.327-.171-.313-2.196-.321-.99-.004-1.858.008-1.929.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLinkUnlink);
export default ForwardRef;
