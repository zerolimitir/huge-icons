import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSongRight = (
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
            d='M2 3.25a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5H2Zm0 4a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5H2Zm15-4a.75.75 0 0 0-.75.75v8.536A4.75 4.75 0 1 0 17.75 16V4.816a4.251 4.251 0 0 1 2.65 6.734.75.75 0 1 0 1.2.9 5.75 5.75 0 0 0-4.6-9.2Zm-15 8a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSongRight);
export default ForwardRef;
