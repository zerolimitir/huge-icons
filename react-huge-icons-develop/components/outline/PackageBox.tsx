import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackageBox = (
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
            d='M8.403 2v-.75V2Zm7.194 0v.75V2Zm2.499.877-.469.585.469-.585ZM21.249 5.4l.469-.586-.469.586Zm-18.498 0-.469-.586.469.586Zm3.153-2.523.469.585-.469-.585ZM21.25 6.96V18h1.5V6.961h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6.961h-1.5V18h1.5ZM8.403 2.75h7.194v-1.5H8.403v1.5Zm9.224.712 3.154 2.523.937-1.171-3.154-2.523-.937 1.171ZM3.22 5.985l3.154-2.523-.937-1.171-3.154 2.523.937 1.171ZM15.597 2.75a3.25 3.25 0 0 1 2.03.712l.937-1.171a4.75 4.75 0 0 0-2.967-1.041v1.5Zm-7.194-1.5a4.75 4.75 0 0 0-2.967 1.04l.937 1.172a3.25 3.25 0 0 1 2.03-.712v-1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5Zm1.5-11.039a2.75 2.75 0 0 0-1.032-2.147l-.937 1.171c.296.237.469.597.469.976h1.5Zm-20 0c0-.38.173-.739.47-.976l-.938-1.171A2.75 2.75 0 0 0 1.25 6.96h1.5ZM9 6v-.75a.75.75 0 0 0-.75.75H9Zm6 0h.75a.75.75 0 0 0-.75-.75V6Zm-6 .75h6v-1.5H9v1.5ZM14.25 6v3h1.5V6h-1.5Zm-4.5 3V6h-1.5v3h1.5ZM12 11.25A2.25 2.25 0 0 1 9.75 9h-1.5A3.75 3.75 0 0 0 12 12.75v-1.5ZM14.25 9A2.25 2.25 0 0 1 12 11.25v1.5A3.75 3.75 0 0 0 15.75 9h-1.5Z'
        />
        <path
            fill='currentColor'
            d='M2.5 5.25a.75.75 0 0 0 0 1.5v-1.5Zm19 1.5a.75.75 0 0 0 0-1.5v1.5Zm-19 0h19v-1.5h-19v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBox);
export default ForwardRef;
