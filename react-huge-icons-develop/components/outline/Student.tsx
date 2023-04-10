import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStudent = (
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
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M20 5v5.5' />
        <path
            fill='currentColor'
            d='M16.75 7v-.75h-1.5V7h1.5Zm-8 0v-.75h-1.5V7h1.5ZM12 2l.263-.702a.75.75 0 0 0-.526 0L12 2ZM4 5l-.263-.702a.75.75 0 0 0 0 1.404L4 5Zm8 3-.263.702a.75.75 0 0 0 .526 0L12 8Zm8-3 .263.702a.75.75 0 0 0 0-1.404L20 5Zm-7.289 12.006-.533-.527.533.527ZM14.3 15.4l.533.527-.533-.527Zm.938-.256.212-.72-.212.72ZM9.7 15.4l.534-.528-.534.528Zm1.589 1.606.533-.527-.533.527Zm-2.527-1.862-.212-.72.212.72ZM19.25 22a.75.75 0 0 0 1.5 0h-1.5Zm-16 0a.75.75 0 0 0 1.5 0h-1.5Zm12-15v2h1.5V7h-1.5Zm-6.5 2V7h-1.5v2h1.5ZM12 12.25A3.25 3.25 0 0 1 8.75 9h-1.5A4.75 4.75 0 0 0 12 13.75v-1.5ZM15.25 9A3.25 3.25 0 0 1 12 12.25v1.5A4.75 4.75 0 0 0 16.75 9h-1.5Zm-3.513-7.702-8 3 .526 1.404 8-3-.526-1.404Zm.526 7.404 8-3-.526-1.404-8 3 .526 1.404Zm-.526-6 8 3 .526-1.404-8-3-.526 1.404Zm.526 4.596-8-3-.526 1.404 8 3 .526-1.404Zm.981 10.235 1.589-1.606-1.067-1.055-1.588 1.607 1.066 1.054Zm1.782-1.67C17.7 16.65 19.25 18.327 19.25 20h1.5c0-2.66-2.363-4.712-5.3-5.575l-.424 1.439Zm-5.859.064 1.589 1.606 1.066-1.055-1.588-1.606-1.067 1.055ZM4.75 20c0-1.674 1.55-3.35 4.224-4.136l-.424-1.44c-2.937.864-5.3 2.915-5.3 5.576h1.5Zm14.5 0v2h1.5v-2h-1.5Zm-16 0v2h1.5v-2h-1.5Zm6.984-5.128a1.698 1.698 0 0 0-1.684-.447l.424 1.439c.049-.015.126-.005.193.063l1.067-1.055Zm4.599 1.055c.067-.068.144-.078.193-.063l.424-1.44a1.7 1.7 0 0 0-1.684.448l1.067 1.055Zm-2.655.552a.25.25 0 0 1-.356 0l-1.066 1.054a1.75 1.75 0 0 0 2.488 0l-1.066-1.055Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStudent);
export default ForwardRef;
