import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDigitalHealth = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.5 3.057c-.791.182-1.406.663-1.735 1.354-.194.408-.257.673-.257 1.089 0 .418.063.681.262 1.1.128.269.225.403.466.643.538.535 1.02.737 1.764.737.397 0 .504-.015.781-.11a2.52 2.52 0 0 0 1.454-1.281c.194-.408.257-.673.257-1.089 0-.416-.063-.681-.257-1.089a2.466 2.466 0 0 0-2.129-1.394 2.446 2.446 0 0 0-.606.04M8.142 9.044a4.05 4.05 0 0 0-1.529.6c-.432.294-.902.81-1.168 1.281-.535.948-.589 2.344-.132 3.431.064.153.199.4.299.551.301.449 4.007 5.014 4.274 5.264 1.197 1.12 3.092 1.097 4.281-.051.193-.187 3.607-4.381 4.102-5.04.798-1.062.958-2.661.395-3.935-.145-.328-.367-.646-.684-.98-1.011-1.066-2.501-1.428-3.91-.948-.589.2-.963.445-1.557 1.018L12 10.73l-.513-.495c-.594-.573-.969-.819-1.557-1.018a3.779 3.779 0 0 0-1.788-.173'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDigitalHealth);
export default ForwardRef;
