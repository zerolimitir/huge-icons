import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShuffle = (
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
            d='m18.293 7.293.53-.53-.53.53ZM17.53 5.47a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm.763 3.237.53.53-.53-.53Zm-1.823.763a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM13 7.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-7 8a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm6.106-5.039.67-.335-.67.335Zm1.788 3.578-.67.335.67-.335Zm5.399 2.918.53.53-.53-.53Zm-1.823.763a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.823-2.177.53-.53-.53.53Zm-.763-1.823a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm.47 3.28a.75.75 0 0 0 0-1.5v1.5ZM5 7.25a.75.75 0 0 0 0 1.5v-1.5Zm13.823-.487L17.53 5.47l-1.06 1.06 1.293 1.293 1.06-1.06Zm-1.06 1.414L16.47 9.47l1.06 1.06 1.293-1.293-1.06-1.06ZM13 8.75h5v-1.5h-5v1.5Zm-2 6.5H5v1.5h6v-1.5Zm6.763-7.427a.25.25 0 0 1 0 .354l1.06 1.06a1.75 1.75 0 0 0 0-2.474l-1.06 1.06Zm-7.328 2.724 1.789 3.577 1.341-.67-1.789-3.578-1.341.67Zm7.328 5.63L16.47 17.47l1.06 1.06 1.293-1.293-1.06-1.06Zm1.06-1.414L17.53 13.47l-1.06 1.06 1.293 1.293 1.06-1.06Zm-2.35 1.987H18v-1.5h-1.528v1.5Zm-8.945-9.5H5v1.5h2.528v-1.5Zm11.295 9.987a1.75 1.75 0 0 0 0-2.474l-1.06 1.06a.25.25 0 0 1 0 .354l1.06 1.06Zm-6.6-3.113a4.75 4.75 0 0 0 4.25 2.626v-1.5a3.25 3.25 0 0 1-2.908-1.797l-1.341.671Zm-.447-4.248A4.75 4.75 0 0 0 7.528 7.25v1.5a3.25 3.25 0 0 1 2.907 1.797l1.341-.671Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShuffle);
export default ForwardRef;
