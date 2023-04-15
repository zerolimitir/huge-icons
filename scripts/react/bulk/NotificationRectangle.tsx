import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgNotificationRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.34 2.046a4.934 4.934 0 0 0-1.52.471c-1.422.697-2.384 1.93-2.724 3.489-.098.454-.117 1.296-.038 1.774a4.938 4.938 0 0 0 1.319 2.655 4.912 4.912 0 0 0 1.903 1.257c.627.231.967.287 1.74.286.603-.001.729-.013 1.111-.109 1.901-.476 3.261-1.836 3.738-3.738.097-.387.108-.503.108-1.131s-.011-.744-.108-1.131c-.192-.767-.496-1.396-.943-1.957a5.04 5.04 0 0 0-4.586-1.866'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNotificationRectangle);
export default ForwardRef;
