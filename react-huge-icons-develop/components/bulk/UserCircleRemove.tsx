import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserCircleRemove = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 25'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <circle r={9} fill='currentColor' opacity={0.4} transform='matrix(1 0 0 -1 11 11.757)' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10.87 14.507c-1.072.003-2.137.295-3.563.934a.75.75 0 1 1-.614-1.369c1.52-.68 2.805-1.062 4.172-1.065 1.361-.004 2.73.366 4.418 1.055a.75.75 0 1 1-.566 1.389c-1.612-.658-2.77-.947-3.848-.944Z'
            clipRule='evenodd'
        />
        <circle r={3} fill='currentColor' transform='matrix(1 0 0 -1 11 8.757)' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M18.884 20.7a.75.75 0 0 0 1.06-1.06l-.883-.884.884-.883a.75.75 0 0 0-1.061-1.06l-.884.883-.884-.884a.75.75 0 1 0-1.06 1.06l.883.884-.884.885a.75.75 0 1 0 1.061 1.06l.884-.884.884.884Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserCircleRemove);
export default ForwardRef;
