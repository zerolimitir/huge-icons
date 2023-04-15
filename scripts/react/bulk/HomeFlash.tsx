import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeFlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.7 8.316a1.005 1.005 0 0 0-.265.189c-.252.276-3.106 4.131-3.148 4.252a.766.766 0 0 0 .198.791c.22.202.299.212 1.694.212h1.301l-1.073 1.432c-.591.787-1.095 1.492-1.12 1.566a.675.675 0 0 0 .029.542c.175.38.587.552.954.398a.961.961 0 0 0 .225-.13c.152-.134 3.172-4.193 3.218-4.325a.766.766 0 0 0-.198-.791c-.22-.202-.299-.212-1.694-.212H11.52l1.073-1.432c.591-.787 1.095-1.492 1.12-1.566a.675.675 0 0 0-.029-.542c-.181-.392-.607-.559-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeFlash);
export default ForwardRef;
