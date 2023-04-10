import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVideoCall = (
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
            d='M12.75 18.992v2.258H15a.75.75 0 0 1 0 1.5H9a.75.75 0 1 1 0-1.5h2.25v-2.258h1.5Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z'
            opacity={0.4}
        />
        <circle r={2} fill='currentColor' transform='matrix(1 0 0 -1 12 8)' />
        <rect width={8} height={4} x={8} y={11} fill='currentColor' rx={2} />
    </svg>
);
const ForwardRef = forwardRef(SvgVideoCall);
export default ForwardRef;
