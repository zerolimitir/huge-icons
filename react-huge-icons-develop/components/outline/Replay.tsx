import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReplay = (
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
            d='M22.75 12a.75.75 0 0 0-1.5 0h1.5ZM20 5.999l-.6.45a.75.75 0 0 0 1.312-.213L20 6Zm1.712-2.762a.75.75 0 0 0-1.424-.474l1.424.474ZM11.17 14.915l-.336-.671.336.67Zm3.146-1.573-.336-.671.336.67ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75a9.235 9.235 0 0 1 7.4 3.7l1.2-.901A10.735 10.735 0 0 0 12 1.25v1.5Zm8.712 3.486 1-2.999-1.424-.474-1 2.999 1.424.474Zm-6.06 3.752-3.146-1.573-.67 1.341 3.145 1.573.671-1.341Zm-6.402.44v3.145h1.5v-3.146h-1.5Zm3.256 5.157 3.146-1.573-.67-1.341-3.147 1.573.671 1.341ZM8.25 13.573c0 1.673 1.76 2.76 3.256 2.012l-.67-1.341a.75.75 0 0 1-1.086-.671h-1.5Zm3.256-5.158c-1.496-.748-3.256.34-3.256 2.012h1.5a.75.75 0 0 1 1.085-.67l.671-1.342Zm2.475 2.914a.75.75 0 0 1 0 1.342l.671 1.341c1.659-.829 1.659-3.195 0-4.024l-.67 1.341Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReplay);
export default ForwardRef;
