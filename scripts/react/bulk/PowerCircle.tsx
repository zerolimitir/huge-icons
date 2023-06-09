import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPowerCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 6.316a.734.734 0 0 0-.398.413c-.091.219-.091 2.323 0 2.542a.748.748 0 0 0 1.396 0c.051-.122.062-.348.061-1.28-.001-1.014-.008-1.148-.075-1.291-.181-.392-.607-.558-.984-.384M8.639 7.348c-.319.159-1.074.927-1.41 1.434a6.06 6.06 0 0 0-.897 2.167c-.098.488-.098 1.614 0 2.102a5.753 5.753 0 0 0 1.606 3.011 5.753 5.753 0 0 0 3.011 1.606c.488.098 1.614.098 2.102 0a5.753 5.753 0 0 0 3.011-1.606 5.753 5.753 0 0 0 1.606-3.011c.098-.488.098-1.614 0-2.102a5.74 5.74 0 0 0-1.627-3.031c-.65-.648-.95-.783-1.341-.602a.734.734 0 0 0-.398.413c-.156.373-.06.583.518 1.125.307.288.531.541.684.771.932 1.399.972 3.135.108 4.59-.252.424-.918 1.1-1.34 1.36-1.751 1.082-3.933.809-5.336-.666-1.183-1.245-1.493-2.98-.819-4.595.217-.52.55-.979 1.062-1.459.588-.552.683-.769.505-1.155a.734.734 0 0 0-.413-.398c-.214-.089-.386-.077-.632.046'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPowerCircle);
export default ForwardRef;
