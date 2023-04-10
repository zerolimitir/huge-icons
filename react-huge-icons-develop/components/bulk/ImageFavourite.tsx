import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgImageFavourite = (
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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M19.061 11.884 22 14v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-4l2.939 2.116a4 4 0 0 0 5.013-.273l4.096-3.686a4 4 0 0 1 5.013-.273Z'
        />
        <circle cx={8.5} cy={8.5} r={2.5} fill='currentColor' />
        <path
            fill='currentColor'
            d='m18.768 2.6-.268.289-.268-.29a1.794 1.794 0 0 0-2.677 0c-.74.8-.74 2.096 0 2.895l1.874 2.026c.591.64 1.55.64 2.142 0l1.874-2.026c.74-.8.74-2.095 0-2.894-.739-.8-1.938-.8-2.677 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageFavourite);
export default ForwardRef;
