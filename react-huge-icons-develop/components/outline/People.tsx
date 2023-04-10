import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPeople = (
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
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M14 16h2.127a4 4 0 0 1 3.072 1.44l1.067 1.28c1.086 1.302.16 3.28-1.536 3.28H5.27c-1.696 0-2.622-1.978-1.536-3.28L4.8 17.44A4 4 0 0 1 7.873 16H10'
        />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1 1 1 0 0 0-1 1v3a2 2 0 1 1-4 0v-3a1 1 0 0 0-1-1 1 1 0 0 1-1-1v-2a4 4 0 0 1 4-4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPeople);
export default ForwardRef;
