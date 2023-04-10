import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHoodedBellCrooked = (
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
            d='m12.88 19.064-8.17-8.17c-1.293-1.293-.73-3.332.957-3.467a3.655 3.655 0 0 0 1.996-.772l3.102-2.47c1.673-1.332 4.027-1.443 6.06-.447l.074-.073a2.27 2.27 0 0 1 3.21 3.21l-.073.073c.996 2.034.885 4.388-.447 6.061l-2.47 3.102a3.655 3.655 0 0 0-.772 1.996c-.135 1.687-2.174 2.25-3.467.957Zm-1.453 1.652c-1.097.404-2.415.136-3.339-.788-.927-.927-1.194-2.252-.783-3.352a.595.595 0 0 1 .244-.29.667.667 0 0 1 .829.092l3.25 3.25a.677.677 0 0 1 .104.824.603.603 0 0 1-.305.264Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHoodedBellCrooked);
export default ForwardRef;
