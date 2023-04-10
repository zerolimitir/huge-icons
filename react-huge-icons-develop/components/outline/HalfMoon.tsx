import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHalfMoon = (
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
            d='m14.475 3 .217-.718a.75.75 0 0 0-.935.936L14.475 3ZM3 14.475l.218-.718a.75.75 0 0 0-.936.935L3 14.475Zm11.119-8.803a8.447 8.447 0 0 1-8.447 8.447v1.5c5.493 0 9.947-4.454 9.947-9.947h-1.5Zm6.131 6.131a8.447 8.447 0 0 1-8.447 8.447v1.5c5.494 0 9.947-4.453 9.947-9.947h-1.5Zm-5.993-8.085a8.451 8.451 0 0 1 5.993 8.085h1.5c0-4.49-2.974-8.283-7.058-9.52l-.435 1.435Zm-.5-.5c.235.775.362 1.599.362 2.454h1.5a9.947 9.947 0 0 0-.427-2.89l-1.435.436ZM11.803 20.25a8.451 8.451 0 0 1-8.085-5.993l-1.436.435c1.238 4.084 5.031 7.058 9.521 7.058v-1.5Zm-6.131-6.131a8.444 8.444 0 0 1-2.454-.362l-.436 1.435a9.947 9.947 0 0 0 2.89.427v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHalfMoon);
export default ForwardRef;
