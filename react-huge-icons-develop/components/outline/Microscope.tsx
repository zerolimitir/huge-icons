import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMicroscope = (
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
            d='M10 4v-.75a.75.75 0 0 0-.75.75H10Zm4 0h.75a.75.75 0 0 0-.75-.75V4Zm0 8v.75a.75.75 0 0 0 .75-.75H14Zm-4 0h-.75c0 .414.336.75.75.75V12Zm1.25-8a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5ZM8 17.25a.75.75 0 0 0 0 1.5v-1.5Zm6.25-11.616a.75.75 0 1 0-.5 1.415l.5-1.415ZM9 21.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5ZM11.25 14a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5ZM10 4.75h4v-1.5h-4v1.5ZM13.25 4v8h1.5V4h-1.5Zm.75 7.25h-4v1.5h4v-1.5Zm-3.25.75V4h-1.5v8h1.5Zm2-8V2h-1.5v2h1.5Zm4.5 8c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 18.75 12h-1.5ZM12 17.25H8v1.5h4v-1.5Zm1.75-10.201A5.252 5.252 0 0 1 17.25 12h1.5c0-2.94-1.88-5.44-4.5-6.366l-.5 1.415ZM11.25 18v4h1.5v-4h-1.5Zm.75 3.25H9v1.5h3v-1.5Zm0 1.5h3v-1.5h-3v1.5Zm.75-8.75v-2h-1.5v2h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMicroscope);
export default ForwardRef;
