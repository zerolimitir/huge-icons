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
            d='M9.502 19.514c.98.98 2.403 1.222 3.536.707L8.795 15.98c-.515 1.132-.272 2.556.707 3.535Z'
        />
        <path
            fill='currentColor'
            d='m4.71 11.893 8.17 8.17c1.293 1.294 3.332.731 3.467-.956.06-.747.327-1.437.772-1.996l2.47-3.102c1.332-1.673 1.443-4.027.447-6.06l.073-.074a2.27 2.27 0 1 0-3.21-3.21l-.073.073c-2.034-.996-4.388-.885-6.061.447l-3.102 2.47a3.655 3.655 0 0 1-1.996.772c-1.687.135-2.25 2.174-.957 3.466Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHoodedBellCrooked);
export default ForwardRef;
