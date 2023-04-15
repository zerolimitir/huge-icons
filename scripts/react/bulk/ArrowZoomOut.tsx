import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowZoomOut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.24 13.7 6.9 16.04l-.02-1.453-.02-1.453-.107-.162a.757.757 0 0 0-1.128-.139c-.23.215-.225.152-.225 2.812v2.448l.096.164a.793.793 0 0 0 .256.253l.159.09h2.446c2.657 0 2.595.005 2.81-.225a.757.757 0 0 0-.139-1.128l-.162-.107-1.461-.012-1.461-.012 2.358-2.358 2.357-2.358-.519-.52a9.5 9.5 0 0 0-.54-.52c-.011 0-1.073 1.053-2.36 2.34'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowZoomOut);
export default ForwardRef;
