import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrackPlayAdd = (
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
            d='M21.02 14.056a.75.75 0 1 0 1.464.332l-1.463-.332Zm-6.632 8.428a.75.75 0 1 0-.332-1.463l.332 1.463Zm-3.217-7.57-.336-.67.336.67Zm3.146-1.572-.336-.671.336.67ZM19.75 16a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5ZM22 19.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-4 3A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5ZM21.25 12c0 .707-.08 1.396-.23 2.056l1.464.332A10.78 10.78 0 0 0 22.75 12h-1.5Zm-7.194 9.02c-.66.15-1.348.23-2.056.23v1.5c.82 0 1.62-.092 2.388-.266l-.332-1.463Zm.596-11.032-3.146-1.573-.67 1.341 3.145 1.573.671-1.341Zm-6.402.44v3.145h1.5v-3.146h-1.5Zm3.256 5.157 3.146-1.573-.67-1.341-3.147 1.573.671 1.341ZM8.25 13.573c0 1.673 1.76 2.76 3.256 2.012l-.67-1.341a.75.75 0 0 1-1.086-.671h-1.5Zm3.256-5.158c-1.496-.748-3.256.34-3.256 2.012h1.5a.75.75 0 0 1 1.085-.67l.671-1.342Zm2.475 2.914a.75.75 0 0 1 0 1.342l.671 1.341c1.659-.829 1.659-3.195 0-4.024l-.67 1.341ZM18.25 16v6h1.5v-6h-1.5ZM22 18.25h-6v1.5h6v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPlayAdd);
export default ForwardRef;
