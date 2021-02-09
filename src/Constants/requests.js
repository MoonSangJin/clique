const HostDictionaryByEnv = {
  local: 'http://localhost:8000',
  dev: 'http://ec2-52-78-239-231.ap-northeast-2.compute.amazonaws.com:8000',
  production: 'http://ec2-15-165-122-206.ap-northeast-2.compute.amazonaws.com',
};

export const HOST = HostDictionaryByEnv['dev'];
