import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCapsuleOpen = (
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
            d='M3 8.242A3 3 0 0 1 7.243 4l2.828 2.828-4.242 4.243L3 8.242ZM12 15c.828 0 1.5-.396 1.5-1.5 0-1.105-1.5-2.5-1.5-2.5s-1.5 1.395-1.5 2.5c0 1.104.672 1.5 1.5 1.5Zm-2.5 4.5c0 1.104-.672 1.5-1.5 1.5s-1.5-.396-1.5-1.5C6.5 18.395 8 17 8 17s1.5 1.395 1.5 2.5Zm8 0c0 1.104-.672 1.5-1.5 1.5s-1.5-.396-1.5-1.5c0-1.105 1.5-2.5 1.5-2.5s1.5 1.395 1.5 2.5ZM21 4a3 3 0 0 1 0 4.242l-2.829 2.829-4.242-4.243L16.757 4A3 3 0 0 1 21 4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCapsuleOpen);
export default ForwardRef;
