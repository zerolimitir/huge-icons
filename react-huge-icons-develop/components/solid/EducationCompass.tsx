import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEducationCompass = (
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
            d='M12 1.25a.75.75 0 0 1 .75.75v2.11c1.358.326 2.365 1.52 2.365 2.942 0 .567-.16 1.098-.439 1.552a3.13 3.13 0 0 1-2.633 1.479h-.086a3.13 3.13 0 0 1-2.633-1.48 2.956 2.956 0 0 1-.439-1.551c0-1.422 1.007-2.616 2.365-2.943V2a.75.75 0 0 1 .75-.75ZM8.496 10l-2.522 4.25H3a.75.75 0 0 0 0 1.5h2.084l-1.528 2.576a3.951 3.951 0 0 0-.526 2.504l.064.517a.5.5 0 0 0 .688.4l.507-.21a4.118 4.118 0 0 0 1.965-1.696L8.68 15.75h6.638l2.427 4.091a4.119 4.119 0 0 0 1.965 1.696l.507.21a.5.5 0 0 0 .688-.4l.064-.517a3.951 3.951 0 0 0-.526-2.504l-1.528-2.576H21a.75.75 0 0 0 0-1.5h-2.974L15.505 10a4.632 4.632 0 0 1-2.7 1.514l1.624 2.736H9.571l1.623-2.736A4.632 4.632 0 0 1 8.496 10Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEducationCompass);
export default ForwardRef;
