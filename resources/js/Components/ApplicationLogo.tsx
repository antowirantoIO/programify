import React from 'react';

export default function ApplicationLogo({
  width,
}: {
  width?: string;
}) {
  return (
      <img src="https://laracasts.com/images/logo/logo-white.svg" alt="Programify Logo" width={width} />
  );
}
