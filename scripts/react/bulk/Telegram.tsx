import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTelegram = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.34 4.122c-.044.021-3.563 1.541-7.82 3.379-4.524 1.954-7.798 3.389-7.88 3.455-.425.343-.454 1.065-.056 1.458.241.239.317.256 2.49.572 1.843.267 2.109.297 2.467.278a4.383 4.383 0 0 0 1.528-.382c.182-.087 1.472-.924 2.868-1.86 1.619-1.086 2.573-1.702 2.635-1.702.077 0 .602-.524 2.467-2.462 2.291-2.382 2.367-2.465 2.3-2.539-.134-.148-.389-.239-.662-.236a1.228 1.228 0 0 0-.337.039'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTelegram);
export default ForwardRef;
