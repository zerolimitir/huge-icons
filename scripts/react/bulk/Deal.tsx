import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDeal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.389 5.044a3.98 3.98 0 0 0-1.593.639c-.538.365-.732.598-2.311 2.786-.401.556-.776 1.114-.835 1.24-.22.481-.158 1.169.148 1.643.179.277.349.427.642.564.183.087.277.104.561.104.304 0 .369-.014.608-.132.242-.119.341-.212 1.039-.982.425-.467.787-.854.806-.86.049-.014 2.32 4.568 2.445 4.934.038.11.078.371.089.58.025.456-.045.799-.245 1.204l-.136.276 2.247-.001c2.475 0 2.59-.01 3.024-.241.411-.219.772-.636.957-1.105.162-.412.171-.645.158-4.193l-.013-3.4-.109-.299c-.141-.386-.431-.809-.688-1.001-.112-.084-.743-.45-1.403-.814-1.274-.702-1.66-.865-2.233-.943-.365-.05-2.816-.05-3.158.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeal);
export default ForwardRef;
