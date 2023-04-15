import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSticker = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.08 11.059c-1.31.223-2.408.784-3.322 1.699a5.98 5.98 0 0 0-1.717 3.462c-.03.212-.041 1.07-.033 2.55L12.02 21l5-5 5-5-2.32.004c-1.681.003-2.403.018-2.62.055'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSticker);
export default ForwardRef;
