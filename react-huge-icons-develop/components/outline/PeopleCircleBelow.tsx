import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPeopleCircleBelow = (
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
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1 1 1 0 0 0-1 1v3a2 2 0 1 1-4 0v-3a1 1 0 0 0-1-1 1 1 0 0 1-1-1v-2a4 4 0 0 1 4-4Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M14 16.074c4.008.303 7 1.498 7 2.926 0 1.657-4.03 3-9 3s-9-1.343-9-3c0-1.428 2.992-2.623 7-2.926'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPeopleCircleBelow);
export default ForwardRef;
