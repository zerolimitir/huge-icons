import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLoudspeaker = (
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
            d='M8 2.75h8v-1.5H8v1.5ZM19.25 6v12h1.5V6h-1.5ZM16 21.25H8v1.5h8v-1.5ZM4.75 18V6h-1.5v12h1.5ZM8 21.25A3.25 3.25 0 0 1 4.75 18h-1.5A4.75 4.75 0 0 0 8 22.75v-1.5ZM19.25 18A3.25 3.25 0 0 1 16 21.25v1.5A4.75 4.75 0 0 0 20.75 18h-1.5ZM16 2.75A3.25 3.25 0 0 1 19.25 6h1.5A4.75 4.75 0 0 0 16 1.25v1.5Zm-8-1.5A4.75 4.75 0 0 0 3.25 6h1.5A3.25 3.25 0 0 1 8 2.75v-1.5ZM15.25 15A3.25 3.25 0 0 1 12 18.25v1.5A4.75 4.75 0 0 0 16.75 15h-1.5ZM12 18.25A3.25 3.25 0 0 1 8.75 15h-1.5A4.75 4.75 0 0 0 12 19.75v-1.5ZM8.75 15A3.25 3.25 0 0 1 12 11.75v-1.5A4.75 4.75 0 0 0 7.25 15h1.5ZM12 11.75A3.25 3.25 0 0 1 15.25 15h1.5A4.75 4.75 0 0 0 12 10.25v1.5Z'
        />
        <circle r={1} fill='currentColor' transform='matrix(1 0 0 -1 12 15)' />
        <path fill='currentColor' d='M13.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgLoudspeaker);
export default ForwardRef;
