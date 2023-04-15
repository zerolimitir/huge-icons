import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMinimizeRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M20.32 2.703c-.092.039-1.833 1.753-5.03 4.948L10.4 12.54v-2.1c0-1.415-.015-2.152-.045-2.26-.059-.212-.328-.479-.54-.536a.763.763 0 0 0-.539.06c-.156.078-.349.317-.376.465-.013.072-.018 1.565-.012 3.317l.012 3.187.122.15c.067.083.193.189.28.234.156.082.2.083 3.258.083 1.705 0 3.168-.014 3.251-.032.266-.056.506-.321.563-.623.062-.325-.216-.746-.554-.84-.108-.03-.845-.045-2.26-.045h-2.1l4.889-4.89c3.468-3.469 4.906-4.933 4.95-5.039a.739.739 0 0 0-.979-.968'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMinimizeRectangle);
export default ForwardRef;
