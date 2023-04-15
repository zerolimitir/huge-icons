import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTick = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.82 6.276a.95.95 0 0 0-.213.087c-.052.031-1.845 2.001-3.986 4.377a648.362 648.362 0 0 1-4.026 4.448 1.346 1.346 0 0 1-.708.319c-.225.026-.6-.069-.786-.2-.067-.047-.925-.727-1.907-1.513-.983-.785-1.828-1.45-1.88-1.477a.886.886 0 0 0-.313-.053c-.27-.004-.476.109-.633.347a.774.774 0 0 0-.027.745c.05.087.777.697 1.999 1.675 2.068 1.658 2.248 1.779 2.85 1.913.226.05.409.061.726.045.689-.036 1.218-.257 1.696-.707.327-.307 7.929-8.746 8.046-8.931.11-.175.11-.521-.001-.711-.161-.275-.536-.439-.837-.364'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTick);
export default ForwardRef;
