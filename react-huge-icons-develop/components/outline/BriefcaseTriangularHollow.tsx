import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBriefcaseTriangularHollow = (
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
            d='M7.25 6a.75.75 0 0 0 1.5 0h-1.5Zm8 0a.75.75 0 0 0 1.5 0h-1.5ZM2.416 9.723a.75.75 0 1 0-.832 1.249l.832-1.249Zm20 1.249a.75.75 0 0 0-.832-1.249l.832 1.249ZM9.903 13.657a.75.75 0 1 0 .15-1.492l-.15 1.492Zm4.045-1.492a.75.75 0 1 0 .149 1.492l-.15-1.492ZM6 6.75h12v-1.5H6v1.5ZM21.25 10v8h1.5v-8h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18v-8h-1.5v8h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 6.75A3.25 3.25 0 0 1 21.25 10h1.5A4.75 4.75 0 0 0 18 5.25v1.5ZM6 5.25A4.75 4.75 0 0 0 1.25 10h1.5A3.25 3.25 0 0 1 6 6.75v-1.5ZM8.75 6V5h-1.5v1h1.5ZM11 2.75h2v-1.5h-2v1.5ZM15.25 5v1h1.5V5h-1.5ZM13 2.75A2.25 2.25 0 0 1 15.25 5h1.5A3.75 3.75 0 0 0 13 1.25v1.5ZM8.75 5A2.25 2.25 0 0 1 11 2.75v-1.5A3.75 3.75 0 0 0 7.25 5h1.5ZM2 10.348l-.415.624.001.001.003.002.01.007a5.973 5.973 0 0 0 .154.096c.104.063.254.152.449.259.389.214.954.5 1.675.802a21.176 21.176 0 0 0 6.026 1.518l.15-1.492a19.674 19.674 0 0 1-5.597-1.41 16.105 16.105 0 0 1-1.532-.733 10.153 10.153 0 0 1-.509-.3v.001L2 10.347Zm12.097 3.31a21.176 21.176 0 0 0 6.026-1.52c.72-.3 1.286-.587 1.675-.801a11.487 11.487 0 0 0 .603-.355l.01-.007.003-.002.001-.001-.415-.624a120.194 120.194 0 0 1-.415-.625l-.004.002a2.562 2.562 0 0 1-.115.072c-.085.052-.216.13-.39.225-.348.191-.866.454-1.532.733a19.675 19.675 0 0 1-5.596 1.41l.149 1.492Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d='M14 12.16v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97v-1.03c0-1 0-1 1-1h2c1 0 1 0 1 1Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcaseTriangularHollow);
export default ForwardRef;
