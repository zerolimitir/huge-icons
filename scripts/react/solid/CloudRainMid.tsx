import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudRainMid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.305 4.044a7 7 0 0 0-3.164 1.133 6.984 6.984 0 0 0-1.829 9.902c.318.45 1.026 1.179 1.451 1.495.291.216.942.626.995.626.014 0 .076-.103.138-.23.421-.862 1.455-2.079 1.972-2.321.204-.096.28-.109.632-.109s.428.013.632.109c.544.255 1.6 1.519 2.01 2.408.077.165.179.445.229.621l.089.321h1.08l.091-.329c.05-.182.154-.463.231-.626.424-.897 1.466-2.142 2.006-2.395.204-.096.28-.109.632-.109s.428.013.632.109c.39.182 1.104.937 1.599 1.691.294.446.428.709.571 1.12.061.176.115.325.12.332a2.45 2.45 0 0 0 .355-.128c2.449-.987 3.716-3.692 2.897-6.184A5.013 5.013 0 0 0 19.9 9.009c-.363-.273-1.147-.66-1.589-.786-.841-.24-1.877-.241-2.759-.004-.103.027-.115.013-.295-.345A6.87 6.87 0 0 0 12.06 4.72a6.948 6.948 0 0 0-3.755-.676M8.226 16.28c-.596.632-1.086 1.418-1.188 1.907-.104.503.036 1.096.334 1.407.52.542 1.736.542 2.256 0 .314-.328.449-.951.318-1.463-.13-.506-.554-1.182-1.135-1.806l-.311-.336-.274.291m7 0c-.596.632-1.086 1.418-1.188 1.907-.104.503.036 1.096.334 1.407.52.542 1.736.542 2.256 0 .314-.328.449-.951.318-1.463-.13-.506-.554-1.182-1.135-1.806l-.311-.336-.274.291'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudRainMid);
export default ForwardRef;
