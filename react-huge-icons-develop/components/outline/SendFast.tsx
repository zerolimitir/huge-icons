import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSendFast = (
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
            d='m9.454 4.26.335-.67-.335.67Zm11.23 5.612-.335.671.335-.67Zm0 4.256.335.67-.335-.67ZM9.454 19.74l-.336-.671.336.67Zm-3.24-3.094-.685-.305.685.305Zm1.636-3.68.685.305-.685-.305Zm0-1.932.685-.305-.685.305Zm-1.636-3.68.685-.305-.685.305ZM8.5 11.25a.75.75 0 0 0 0 1.5v-1.5Zm3.5 1.5a.75.75 0 0 0 0-1.5v1.5ZM2 9.25a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 2.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm5.118-9.819 11.23 5.612.671-1.342L9.79 3.59l-.67 1.342Zm11.23 8.526-11.23 5.612.67 1.342 11.231-5.612-.67-1.342ZM6.9 16.95l1.636-3.68-1.37-.61-1.636 3.68 1.37.61Zm1.636-6.222L6.9 7.05l-1.37.61 1.636 3.68 1.37-.61Zm0 2.542c.36-.81.36-1.733 0-2.542l-1.37.61c.187.42.187.901 0 1.322l1.37.61Zm.583 5.798c-1.37.684-2.84-.723-2.219-2.118l-1.37-.61c-1.194 2.684 1.634 5.381 4.26 4.07l-.67-1.342Zm11.23-8.526c1.202.6 1.202 2.314 0 2.914l.671 1.342c2.308-1.153 2.308-4.445 0-5.598l-.67 1.342ZM9.789 3.59c-2.625-1.312-5.453 1.386-4.26 4.07L6.9 7.05c-.62-1.395.85-2.802 2.22-2.118l.67-1.342ZM8.5 12.75H12v-1.5H8.5v1.5Zm-6.5-2h2v-1.5H2v1.5Zm0 4h2v-1.5H2v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSendFast);
export default ForwardRef;
