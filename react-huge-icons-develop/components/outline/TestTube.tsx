import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTestTube = (
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
            d='M10 2v-.75a.75.75 0 0 0-.75.75H10Zm4 0h.75a.75.75 0 0 0-.75-.75V2ZM9.789 8.422l-.671-.335.67.335Zm4.422 0 .67-.335-.67.335ZM4.447 19.106l.67.335-.67-.335Zm15.106 0-.671.335.67-.335ZM8 1.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 9.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-11h4v-1.5h-4v1.5Zm7.764 18.5H6.236v1.5h11.528v-1.5ZM13.25 2v5.528h1.5V2h-1.5Zm.29 6.758 5.342 10.683 1.341-.67-5.341-10.684-1.342.67ZM5.118 19.44 10.46 8.758l-1.342-.671L3.776 18.77l1.342.671ZM10.75 7.528V2h-1.5v5.528h1.5Zm-.29 1.23c.19-.382.29-.803.29-1.23h-1.5c0 .194-.045.385-.132.559l1.342.67Zm2.79-1.23c0 .427.1.848.29 1.23l1.342-.671a1.25 1.25 0 0 1-.132-.56h-1.5ZM6.236 21.25a1.25 1.25 0 0 1-1.118-1.809l-1.342-.67c-.914 1.828.416 3.979 2.46 3.979v-1.5Zm11.528 1.5c2.044 0 3.374-2.151 2.46-3.98l-1.342.671a1.25 1.25 0 0 1-1.118 1.809v1.5ZM8 2.75h8v-1.5H8v1.5Zm0 11h8v-1.5H8v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTube);
export default ForwardRef;
