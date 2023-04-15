import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUserRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.42 3.044c-.802.115-1.652.544-2.242 1.134a3.996 3.996 0 0 0 0 5.644 3.997 3.997 0 0 0 5.644 0 3.997 3.997 0 0 0 0-5.644A4.036 4.036 0 0 0 9.42 3.044M16.872 8.4c-.276.083-.512.393-.512.674 0 .263.113.416.871 1.176l.747.749-.766.771c-.422.423-.786.821-.809.883a.934.934 0 0 0 .023.613c.134.282.47.432.814.362.163-.033.253-.109.97-.82l.79-.784.79.784c.717.711.807.787.97.82.344.07.68-.08.814-.362a.934.934 0 0 0 .023-.613c-.023-.062-.387-.459-.808-.883l-.765-.769.784-.791c.666-.672.789-.814.813-.943.043-.225.001-.483-.099-.624-.182-.256-.61-.361-.894-.219-.07.035-.465.399-.877.809l-.749.744-.771-.764c-.622-.617-.802-.773-.931-.808-.182-.051-.274-.052-.428-.005'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserRemove);
export default ForwardRef;
