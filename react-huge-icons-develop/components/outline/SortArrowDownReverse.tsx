import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSortArrowDownReverse = (
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
            d='M12 16.25a.75.75 0 0 0 0 1.5v-1.5Zm9 1.5a.75.75 0 0 0 0-1.5v1.5Zm-9-7.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-7.5a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5ZM3.56 14.127a.75.75 0 0 0-1.12.996l1.12-.996Zm.945 2.191-.56.499.56-.499Zm2.99 0 .56.499-.56-.499Zm2.066-1.195a.75.75 0 0 0-1.122-.996l1.122.996ZM5.25 17a.75.75 0 0 0 1.5 0h-1.5Zm1.5-12a.75.75 0 0 0-1.5 0h1.5ZM12 17.75h9v-1.5h-9v1.5Zm0-6h6v-1.5h-6v1.5Zm0-6h3v-1.5h-3v1.5Zm-9.56 9.373 1.505 1.694 1.12-.997-1.504-1.693-1.122.996Zm5.615 1.694 1.506-1.694-1.122-.996-1.505 1.693 1.121.997Zm-4.11 0a2.75 2.75 0 0 0 4.11 0l-1.12-.997a1.25 1.25 0 0 1-1.87 0l-1.12.997ZM6.75 17V5h-1.5v12h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSortArrowDownReverse);
export default ForwardRef;
