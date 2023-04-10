import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDeliveryParachute = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.06 12 4.836 7.775c.096-.144.291-.328.672-.519.6-.3 1.48-.506 2.493-.506s1.894.207 2.493.506c.644.323.757.629.757.744v4H9.06Zm-1.504.616L3.47 8.53A.75.75 0 0 1 3.25 8c0-1.946 1.053-3.65 2.643-4.843C7.483 1.965 9.644 1.25 12 1.25c2.356 0 4.517.715 6.107 1.907C19.697 4.35 20.75 6.054 20.75 8a.75.75 0 0 1-.22.53l-4.086 4.086c.345.36.556.847.556 1.384v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6c0-.537.212-1.024.556-1.384ZM14.939 12l4.226-4.225c-.096-.144-.291-.328-.672-.519-.6-.3-1.48-.506-2.493-.506s-1.894.207-2.493.506c-.644.323-.757.629-.757.744v4h2.19Zm-1.189 2a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeliveryParachute);
export default ForwardRef;
