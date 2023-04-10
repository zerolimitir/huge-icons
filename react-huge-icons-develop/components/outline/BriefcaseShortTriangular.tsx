import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBriefcaseShortTriangular = (
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
            d='M7.25 6a.75.75 0 0 0 1.5 0h-1.5Zm8 0a.75.75 0 0 0 1.5 0h-1.5Zm-2.5 5.11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM6 6.75h12v-1.5H6v1.5ZM21.25 10v8h1.5v-8h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18v-8h-1.5v8h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 6.75A3.25 3.25 0 0 1 21.25 10h1.5A4.75 4.75 0 0 0 18 5.25v1.5ZM6 5.25A4.75 4.75 0 0 0 1.25 10h1.5A3.25 3.25 0 0 1 6 6.75v-1.5ZM8.75 6V5h-1.5v1h1.5ZM11 2.75h2v-1.5h-2v1.5ZM15.25 5v1h1.5V5h-1.5ZM13 2.75A2.25 2.25 0 0 1 15.25 5h1.5A3.75 3.75 0 0 0 13 1.25v1.5ZM8.75 5A2.25 2.25 0 0 1 11 2.75v-1.5A3.75 3.75 0 0 0 7.25 5h1.5ZM2 10l-.47.585h.001l.002.002.004.003.012.01a2.457 2.457 0 0 0 .17.123c.113.079.277.187.493.315.432.256 1.073.59 1.933.926 1.72.67 4.308 1.341 7.844 1.395l.022-1.5c-3.352-.05-5.764-.685-7.321-1.293a11.783 11.783 0 0 1-1.714-.819 6.467 6.467 0 0 1-.507-.332l-.001-.001h.001v.001L2 10Zm9.989 3.36c3.547.054 6.146-.619 7.876-1.32a12.335 12.335 0 0 0 1.942-.984 7.607 7.607 0 0 0 .629-.443l.038-.031.012-.01.004-.004.002-.002L22 10a69.64 69.64 0 0 1-.492-.566l.002-.002-.002.002a1.517 1.517 0 0 1-.106.083 6.118 6.118 0 0 1-.397.272c-.364.23-.929.545-1.704.86-1.549.629-3.949 1.262-7.29 1.21l-.022 1.5Zm-.739-2.25v1.5h1.5v-1.5h-1.5Zm0 1.5v1.5h1.5v-1.5h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseShortTriangular);
export default ForwardRef;
