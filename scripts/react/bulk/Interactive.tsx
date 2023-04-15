import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInteractive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.82 12.037a1.088 1.088 0 0 0-.809.964c-.02.216.047.432 1.347 4.331 1.31 3.931 1.374 4.11 1.53 4.287.202.231.421.344.714.37.42.039.858-.193 1.035-.546.04-.079.293-.809.563-1.623.27-.814.523-1.543.562-1.62.084-.165.289-.367.458-.45.066-.032.786-.28 1.6-.55.814-.27 1.544-.523 1.623-.563.353-.177.585-.615.546-1.035a1.005 1.005 0 0 0-.37-.714c-.177-.156-.355-.22-4.272-1.525-4.109-1.37-4.216-1.401-4.527-1.326'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInteractive);
export default ForwardRef;
