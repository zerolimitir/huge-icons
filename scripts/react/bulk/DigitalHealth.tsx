import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDigitalHealth = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.5 3.057c-.791.182-1.406.663-1.735 1.354-.194.408-.257.673-.257 1.089 0 .418.063.681.262 1.1.128.269.225.403.466.643.538.535 1.02.737 1.764.737.397 0 .504-.015.781-.11a2.52 2.52 0 0 0 1.454-1.281c.194-.408.257-.673.257-1.089 0-.416-.063-.681-.257-1.089a2.466 2.466 0 0 0-2.129-1.394 2.446 2.446 0 0 0-.606.04'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDigitalHealth);
export default ForwardRef;
