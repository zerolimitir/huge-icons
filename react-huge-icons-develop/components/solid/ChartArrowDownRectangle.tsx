import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartArrowDownRectangle = (
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
            d='M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm8.5 13.75a.75.75 0 0 1 0-1.5h.94l-2.303-3.512a.25.25 0 0 0-.423.008l-1.908 3.152c-.7 1.156-2.39 1.117-3.034-.07l-2.43-4.47a.75.75 0 1 1 1.317-.716l2.43 4.47a.25.25 0 0 0 .434.01l1.908-3.153a1.75 1.75 0 0 1 2.96-.053l2.447 3.731.491-.982a.75.75 0 1 1 1.342.67l-.724 1.448a1.75 1.75 0 0 1-1.565.967H14.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartArrowDownRectangle);
export default ForwardRef;
