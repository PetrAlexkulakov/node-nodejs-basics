const parseEnv = () => {
    const prefix = 'RSS_';

    for (let key in process.env) {
      if (key.indexOf(prefix) === 0) {
        const value = process.env[key];
        
        console.log(`${key}=${value}`);
      }
    }
};

parseEnv();