import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowRightCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.765 8.26a.772.772 0 0 0-.507.521c-.052.179-.052.226 0 .399.053.175.161.298.99 1.128l.931.932-3.159.001c-2.987.001-3.169.005-3.32.075a.745.745 0 0 0 .029 1.382c.13.054.546.062 3.299.062h3.151l-.931.932c-.829.83-.937.953-.99 1.128-.161.535.326 1.048.886.932.189-.038.255-.098 1.83-1.666 1.674-1.665 1.784-1.794 1.784-2.086 0-.292-.11-.421-1.784-2.086-1.366-1.359-1.657-1.631-1.774-1.653a6.834 6.834 0 0 1-.2-.041.703.703 0 0 0-.235.04'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowRightCircle);
export default ForwardRef;
