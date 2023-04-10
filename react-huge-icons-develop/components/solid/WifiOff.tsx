import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWifiOff = (
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
            d='M2.47 2.47a.75.75 0 0 1 1.06 0l2.707 2.706a.742.742 0 0 1 .024.024l3.753 3.753a.745.745 0 0 1 .023.023l5.17 5.17a.78.78 0 0 1 .02.021l6.303 6.303a.75.75 0 1 1-1.06 1.06l-6.26-6.26a3.231 3.231 0 0 0-1.765-.52 3.24 3.24 0 0 0-2.454 1.119.75.75 0 1 1-1.131-.985 4.74 4.74 0 0 1 3.336-1.628l-2.89-2.888a8.26 8.26 0 0 0-2.58 1.686.75.75 0 0 1-1.04-1.081 9.77 9.77 0 0 1 2.487-1.74L5.595 6.657c-.748.452-1.447.977-2.089 1.563a.75.75 0 1 1-1.012-1.107 14.807 14.807 0 0 1 2.012-1.545L2.47 3.53a.75.75 0 0 1 0-1.06ZM13.445 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8.758 5.27a13.26 13.26 0 0 1 3.687-.52 13.2 13.2 0 0 1 8.939 3.47.75.75 0 0 0 1.012-1.108 14.7 14.7 0 0 0-9.95-3.862c-1.424 0-2.801.202-4.105.579a.75.75 0 0 0 .417 1.44Zm4.307 3a.75.75 0 1 0-.094 1.497 8.219 8.219 0 0 1 5.193 2.287.75.75 0 1 0 1.04-1.081 9.718 9.718 0 0 0-6.139-2.704Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiOff);
export default ForwardRef;
