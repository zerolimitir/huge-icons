import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudRainHigh = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.305 3.044a7 7 0 0 0-3.164 1.133c-3.315 2.208-4.134 6.643-1.83 9.903.249.352 1.241 1.4 1.325 1.4.021 0 .079-.067.13-.149.36-.583 1.226-1.502 1.578-1.675.215-.106.274-.116.656-.116s.441.01.656.116c.276.135.723.569 1.185 1.149.517.647.877 1.3 1.037 1.878a2.5 2.5 0 0 0 .096.304c.009.009.139-.133.29-.315.442-.536.812-.885 1.076-1.014.219-.108.276-.118.66-.118.381 0 .442.011.653.114.252.124.61.462 1.079 1.017.153.182.286.325.294.316.009-.009.052-.149.097-.311.163-.595.599-1.353 1.171-2.036.442-.528.797-.86 1.054-.986.21-.103.271-.114.652-.114.382 0 .441.01.656.116.521.256 1.513 1.446 1.981 2.375l.086.172.186-.132c.102-.072.35-.288.551-.479 1.716-1.632 2.037-4.23.774-6.259-.266-.426-.881-1.079-1.303-1.383a5.268 5.268 0 0 0-1.971-.857c-.252-.054-.505-.072-.98-.07-.611.002-.912.044-1.448.2-.078.022-.108-.016-.275-.349A6.87 6.87 0 0 0 12.06 3.72a6.948 6.948 0 0 0-3.755-.676M6.713 15.29c-1.147 1.28-1.448 2.163-1.03 3.02.23.471.621.67 1.317.67s1.087-.199 1.317-.67c.419-.857.112-1.754-1.033-3.02-.144-.16-.273-.29-.286-.29-.014 0-.142.13-.285.29m10 0c-1.147 1.28-1.448 2.163-1.03 3.02.23.471.621.67 1.317.67s1.087-.199 1.317-.67c.419-.857.112-1.754-1.033-3.02-.144-.16-.273-.29-.286-.29-.014 0-.142.13-.285.29m-5 2c-1.147 1.28-1.448 2.163-1.03 3.02.23.471.621.67 1.317.67s1.087-.199 1.317-.67c.419-.857.112-1.754-1.033-3.02-.144-.159-.273-.29-.286-.29-.014 0-.142.131-.285.29'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudRainHigh);
export default ForwardRef;