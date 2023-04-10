import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDeliveryDone = (
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
            d='M6 3.062h3.5a4 4 0 0 1 4 4v12h-3a3.5 3.5 0 0 0-6.907-.805A3.994 3.994 0 0 1 2 15.062v-8a4 4 0 0 1 4-4Zm5.494 4.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.753-1.402a.75.75 0 0 1 .938-1.172L7.22 10.88a.25.25 0 0 0 .345-.03l2.87-3.28a.75.75 0 0 1 1.058-.071Zm9.952 10.946A3.5 3.5 0 0 0 15 17.258V7.062h2.21a2 2 0 0 1 1.367.541l2.79 2.617A2 2 0 0 1 22 11.678v5.383a1.99 1.99 0 0 1-.554 1.382ZM9 19.062a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm11 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeliveryDone);
export default ForwardRef;
