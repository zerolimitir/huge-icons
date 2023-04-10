import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMusicQuaver = (
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
            d='M12.25 4c0-1.45 1.24-2.907 2.915-2.48a8.753 8.753 0 0 1 5.949 11.761.75.75 0 0 1-1.39 0 10.466 10.466 0 0 0-2.697-3.818c-.986-.868-2.104-1.47-3.277-1.654V17a5.75 5.75 0 1 1-1.5-3.873V4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicQuaver);
export default ForwardRef;
