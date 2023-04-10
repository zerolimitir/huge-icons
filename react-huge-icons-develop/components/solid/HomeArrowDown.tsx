import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHomeArrowDown = (
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
            d='M21 10.15v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 0 1 5.06 0l5 4.118A4.046 4.046 0 0 1 21 10.15Zm-7 7.6a.75.75 0 0 1 0-1.5h.787l-1.563-3.126a.25.25 0 0 0-.448 0l-1.21 2.423c-.646 1.29-2.486 1.29-3.131 0l-2.106-4.212a.75.75 0 1 1 1.342-.67l2.105 4.21a.25.25 0 0 0 .448 0l1.21-2.422c.646-1.29 2.486-1.29 3.131 0L16 15.323l.33-.658a.75.75 0 0 1 1.34.67l-1 2a.75.75 0 0 1-.67.415h-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeArrowDown);
export default ForwardRef;
