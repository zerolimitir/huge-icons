import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAnnouncement = (
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
            d='m10.719 16.589 2.972 4.653a1.493 1.493 0 1 0 2.512-1.616l-2.428-3.748-3.056.71Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M12.513 3.984a2 2 0 0 1 3.197.361l4.293 7.434a2 2 0 0 1-1.286 2.95L7.8 17.268l-3-5.196 7.713-8.088Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m7.848 16.727-2.5-4.33a1.5 1.5 0 1 0-2.598 1.5l2.5 4.33a1.5 1.5 0 1 0 2.598-1.5Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M20.015 2.74a.75.75 0 0 1 .53.918l-.366 1.366a.75.75 0 0 1-1.449-.388l.366-1.366a.75.75 0 0 1 .919-.53Zm.715 5.36a.75.75 0 0 1 .919-.53l1.366.366a.75.75 0 0 1-.389 1.449l-1.366-.367a.75.75 0 0 1-.53-.918Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAnnouncement);
export default ForwardRef;
